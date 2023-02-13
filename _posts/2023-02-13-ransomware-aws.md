---
layout: post
title:  "Running ransomware on AWS for fun"
date:   2023-02-13 01:50:00 -0300
categories: ransomware aws
author_profile: true
author: andre.osti
---

## Introduction
<p style="text-align: justify;">
You may wonder why a company like iFood would be willing to run ransomware on the Cloud. The answer may be simpler than you think, and this post will show you why. It will introduce a security component called Malware Evaluator, developed to support the iFood Disaster Recovery Ecosystem (presented in AWS Summit, 2022, click <a href="https://aws.amazon.com/pt/events/summits/sao-paulo/agenda/?amer-summit-card.sort-by=item.additionalFields.startDateTime&amer-summit-card.sort-order=asc&awsf.amer-summit-day=*all&awsf.amer-summit-session=*all&awsf.amer-summit-level=*all&awsf.amer-summit-category=*all&awsf.amer-summit-customer-persona=*all&amer-summit-card.q=ifood&amer-summit-card.q_operator=AND">here </a> for more details), which is part of the Disaster Recovery (DR) strategy on iFood. We will show how it works and why we created it. We also plan to make it open-source soon, so stay tuned for more updates.
</p>


<p align="center">
  Figure 1: The confused reader
  <img width="360" height="250" src="/assets/sec-eng/img/catwhy.jpeg">
</p>

<p style="text-align: justify;">
There has been an increase in ransomware attacks worldwide, targeting multiple industries, forcing services offline at major hospitals, and hitting significant enterprises such as cloud service providers and cybersecurity vendors. It could not be different in Brazil. According to Fortinet, Brazil is the second country that suffers the most cyber attacks in Latin America. A survey from IBM identified that 60% of Brazilian companies have suffered at least one ransomware attack. Some examples of attacked companies in the country varied from clothing stores, online shopping, tech companies, car location, etc. 
</p>

<p style="text-align: justify;">
Preventing and recovering from ransomware attacks needs proper and tested controls, which are necessary but insufficient. It seems like there is always something that needs to be done. Cybersecurity personnel (probably you!) always face the risk of ransomware attacks daily, even if all good security practices and required controls are in place. In other words, there is no peace if you work or are involved with preventing, detecting, or disaster-recovering ransomware attacks. It is a constant battle that is necessary to protect against the devastating effects of these attacks.
</p>

## Ransomware

<p style="text-align: justify;">
You might be familiar with ransomware, but to keep us on the same page, ransomware is malicious software that encrypts your personal or business data, sometimes even sends a copy to an attacker, and demands a ransom for its release. While the initial steps to compromise a company's infrastructure may vary, the end result is often the same: encrypted files that can only be recovered with a proper isolated backup or by paying the ransom. The impact can vary, but systems generally get offline for days, causing increased pressure on the security teams and a potential drop in the company's market value (e.g., stocks). 
</p>

<p style="text-align: justify;">
Organizations can minimize the impact of a ransomware attack and quickly recover from any disruptions by having a comprehensive disaster recovery strategy. That's where the malware evaluator comes into play. As mentioned, it was developed to support the iFood Disaster Recovery Ecosystem; it allows us to test our detection service against recent samples shared with the community and encrypted (high entropy) files generated in an isolated environment. We've kept in mind that this process is not a silver bullet; instead, it is a best-effort approach, so other controls must be in place to mitigate complementary risks.
</p>

## Malware Evaluator    

<p style="text-align: justify;">
Malware Evaluator is an agent-server solution responsible for running malware on the Cloud. The server periodically queries and saves recent baazar.ch ransomware samples to our local repository and weekly creates hundreds of temporary EC2 instances on an isolated account to run malware samples for a short period. MalwareBazaar is a very cool project operated by abuse.ch. It aims to collect and share malware samples, helping security researchers and threat analysts protect their constituencies and customers from cyber threats. The service also offers hunting. You can hunt for newly observed malware samples on MalwareBazaar by setting up an alert for tags, signatures, YARA rules, clamAV signatures, and vendor detection. If you haven't used Bazaar before, we recommend you visit them. The most recent Bazaar samples are detected by a few of the engines provided by VirusTotal.
</p>

<p style="text-align: justify;">
The controlling of the EC2 instances is handled by the agent, which is baked into the AMI instances. These interactions can be more easily seen in Figure 2 below.
</p>

Figure 2: Malware Eval execution flow
![Figure 2](/assets/sec-eng/img/malware_eval_architecture-v2.png "Figure 2: Malware Eval execution flow")

The execution flow is as follows:

<p style="text-align: justify;">
<b>Steps 1 and 2:</b> The first step is straightforward, which is to obtain malware samples from baazar.ch through its API and then store them in an S3 bucket. 
</p>

<p style="text-align: justify;">
<b>Steps 3, 4, 5, and 6:</b> The malware evaluator service selects sets of Linux or Windows ransomware sample families. Then, it launches ec2 instances and creates isolated virtual machines for each ec2. Next, it executes all samples on the VMs for 600 minutes.
</p>

<p style="text-align: justify;">
<b>Steps 7 and 8:</b> The malware evaluator service gets the encrypted files and samples from VMs. Then it scans them to identify which files were encrypted by ransomware and which family was used to encrypt. Next, it persists the results and sends metrics to a slack channel. 
</p>

<p style="text-align: justify;">
The results are a table that informs us of the detection rate per family and entropy variation of the scanned files. Figure 3 shows a small part of that table. The red rectangle covers the detection rates of each family. The last column is the entropy variation of files before and after the malware execution. In the first line, for example, files had entropies of 5 (7 files) and 6 (10 files). After the execution, these files were encrypted and their entropy became 8 (17 files).
</p>

Figure 3: Detection rates per ransomware family
![Figure 3](/assets/sec-eng/img/malware_family_detection.png "Figure 3: Detection rates per ransomware family")

## Conclusion
<p style="text-align: justify;">
We've seen that running ransomware on the Cloud can be done for benign purposes and support a Disaster Recovery strategy caused by a ransomware attack disruption. 
</p>

<p style="text-align: justify;">
By sharing our experience with the malware evaluator and making it open-source soon, we can provide valuable insights and ideas for other companies to improve their own disaster recovery strategies.
Stay tuned for updates on the release of the iFood Disaster Recovery Ecosystem and how you can use it to enhance your own DR strategy.
</p>

## Recommended Links
VirusTotal - [https://www.virustotal.com](https://www.virustotal.com)

MalwareBaazar - [https://bazaar.abuse.ch](https://bazaar.abuse.ch)

Entropy (soft introduction) - [https://www.youtube.com/watch?v=R4OlXb9aTvQ&ab_channel=ArtoftheProblem](https://www.youtube.com/watch?v=R4OlXb9aTvQ&ab_channel=ArtoftheProblem)

Entropy (hardcore) - [https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf](https://people.math.harvard.edu/~ctm/home/text/others/shannon/entropy/entropy.pdf)

Hashicorp Packer (used to create template AMIs) - [https://www.packer.io](https://www.packer.io)

## Ransomware News

[https://www.antivirusguide.com/cybersecurity/ransomware-statistics/](https://www.antivirusguide.com/cybersecurity/ransomware-statistics/)

[https://www.techtarget.com/searchsecurity/news/252528956/10-of-the-biggest-ransomware-attacks-of-2022](https://www.techtarget.com/searchsecurity/news/252528956/10-of-the-biggest-ransomware-attacks-of-2022)

[https://www.ibm.com/resources/guides/cyber-resilient-organization-study/](https://www.ibm.com/resources/guides/cyber-resilient-organization-study/)

[https://www.bnamericas.com/en/news/brazil-is-the-second-country-that-suffers-the-most-cyber-attacks-in-latin-america](https://www.bnamericas.com/en/news/brazil-is-the-second-country-that-suffers-the-most-cyber-attacks-in-latin-america)

[https://www.zdnet.com/article/most-brazilian-companies-dont-pay-to-get-data-back-after-ransomware-attacks/](https://www.zdnet.com/article/most-brazilian-companies-dont-pay-to-get-data-back-after-ransomware-attacks/)

[https://tecnoblog.net/noticias/2021/10/01/renner-explica-impactos-do-ataque-de-ransomware-a-pedido-do-procon-sp/](https://tecnoblog.net/noticias/2021/10/01/renner-explica-impactos-do-ataque-de-ransomware-a-pedido-do-procon-sp/)

[https://www.infomoney.com.br/mercados/localiza-confirma-incidente-de-seguranca-cibernetica-grupo-hacker-assume-autoria/](https://www.infomoney.com.br/mercados/localiza-confirma-incidente-de-seguranca-cibernetica-grupo-hacker-assume-autoria/)

[https://canaltech.com.br/seguranca/submarino-e-americanas-sofrem-ataque-virtual-e-ficam-fora-do-ar-209682/](https://canaltech.com.br/seguranca/submarino-e-americanas-sofrem-ataque-virtual-e-ficam-fora-do-ar-209682/)

[https://tecnoblog.net/noticias/2021/12/10/conectesus-nao-exibe-vacinas-apos-ataque-hacker-ao-ministerio-da-saude/](https://tecnoblog.net/noticias/2021/12/10/conectesus-nao-exibe-vacinas-apos-ataque-hacker-ao-ministerio-da-saude/)
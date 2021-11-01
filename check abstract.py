#Install textatistic using
#$ pip install textatistic
#And then run this code in python 3

from textatistic import Textatistic

g = 'When individuals decide whether or not to lie, they compare the monetary benefits with the psychological cost of ' \
    'violating their norms. In addition, they are more likely to lie when their lies benefit others. This paper ' \
    'compares the impact of the aversion to lying and prosociality on cheating. I first present a model that ' \
    'incorporates heterogeneous lying costs and prosociality as a part of  {individuals\'} preferences. I show that ' \
    'individuals are mostly honest when someone else has lied on their behalf.  At the same time, if lying generates ' \
    'a positive externality, individuals lie more due to prosocial motives. I test these predictions in two online ' \
    'experiments and show that participants are more dishonest when their lies benefit others. More importantly, ' \
    'I present evidence that, on average, the prosocial motive is stronger than the lying aversion motive. Further ' \
    'results show that individuals care about their influence on {others\'} outcomes rather than taking actions that ' \
    'signal a prosocial intention but do not impact others\' outcomes. '

#Create a Textatistic object
s = Textatistic(g)
print('')
print('The package to compute the scores was developed by Erin Hengel. Notice that the values for DCS, FKS, FOG and SMOG are multiplied by -1 to have a higher score meaning higher readability. For the exact formulae, see Marino Fages (2019).')
print('')
print('DCS:',-s.dalechall_score)
print('FRES:',s.flesch_score)
print('FKS:',-s.fleschkincaid_score)
print('FOG:',-s.gunningfog_score)
print('SMOG:',-s.smog_score)
print('')
print('Characters:', s.char_count)
print('Words:',s.word_count)
print('Sentences:',s.sent_count)
print('Syllables:',s.sybl_count)
print('Difficult words:',s.notdalechall_count)
print('Complex words:',s.polysyblword_count)





// Add new entries to 
// - leaderboard_entries
// - references
// - video_links

const leaderboard_entries = [
    // Model based grasping methods
    ['PoseRBPF@1@', 'GraspIt!@2@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Based', '58/100', '64/100', 'Fixed Random', 'Model-Based', '59/100', '59/100'],
    ['PoseCNN@4@', 'GraspIt!@2@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Based', '48/100', '50/100', 'Fixed Random', 'Model-Based', '38/100', '44/100'],
    // Model free grasping methods
    ['UCN@5@', 'GraspNet@6@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Free', '43/100', '46/100', 'Fixed Random', 'Model-Free', '39/100', '42/100'],
    ['UCN@5@', 'Contact-graspnet@7@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Free', '60/100', '63/100', 'Fixed Random', 'Model-Free', '60/100', '64/100'],
    ['MSMFormer@8@', 'GraspNet@6@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Free', '38/100', '41/100', 'Fixed Random', 'Model-Free', '36/100', '41/100'],
    ['MSMFormer@8@', 'Contact-graspnet@7@ + Top-Down', 'OMPL@3@', 'MoveIt', 'Near-to-Far', 'Model-Free', '57/100', '65/100', 'Fixed Random', 'Model-Free', '61/100', '70/100'],
]

const references = {
    "1": `X. Deng, A. Mousavian, Y. Xiang, F. Xia, T. Bretl, and D. Fox. Poserbpf: A rao–blackwellized
    particle filter for 6-d object pose tracking. IEEE Transactions on Robotics, 37(5):1328–1342,
    2021.`,
    "2": `A. T. Miller and P. K. Allen. Graspit! a versatile simulator for robotic grasping. IEEE Robotics
    & Automation Magazine, 11(4):110–122, 2004.`,
    "3": `I. A. Sucan, M. Moll, and L. E. Kavraki. The open motion planning library. IEEE Robotics &
    Automation Magazine, 19(4):72–82, 2012.`,
    "4": `Y. Xiang, T. Schmidt, V. Narayanan, and D. Fox. Posecnn: A convolutional neural network for
    6d object pose estimation in cluttered scenes. arXiv preprint arXiv:1711.00199, 2017.`,
    "5": `Y. Xiang, C. Xie, A. Mousavian, and D. Fox. Learning rgb-d feature embeddings for unseen
    object instance segmentation. In Conference on Robot Learning, pages 461–470. PMLR, 2021.`,
    "6": `A. Mousavian, C. Eppner, and D. Fox. 6-dof graspnet: Variational grasp generation for object
    manipulation. In Proceedings of the IEEE/CVF International Conference on Computer Vision,
    pages 2901–2910, 2019.`,
    "7": `M. Sundermeyer, A. Mousavian, R. Triebel, and D. Fox. Contact-graspnet: Efficient 6-dof
    grasp generation in cluttered scenes. In 2021 IEEE International Conference on Robotics and
    Automation (ICRA), pages 13438–13444. IEEE, 2021.`,
    "8": `Y. Lu, Y. Chen, N. Ruozzi, and Y. Xiang. Mean shift mask transformer for unseen object
    instance segmentation. arXiv preprint arXiv:2211.11679, 2022.`
}

const video_links = {
    "1": [
        // scene-ID, near-to-far-vid-link, fix-rand-vid-link
        [10, 'https://www.youtube.com/embed/yOq392sQGTE', 'https://www.youtube.com/embed/xotvTLLUBjc'],
        [25, 'https://drive.google.com/file/d/1lFAba7ZQs2sfQQK4DnfpA-jZJcqBZrbD/preview', 'frnd_link'],
        [27, 'https://drive.google.com/file/d/1PUFa-2pfaLhLPJUGnBOWISyCyltEQQPl/preview', 'frnd_link'],
        [38, 'https://drive.google.com/file/d/1VT9k9aD8mzaWaf-G7QARF8z8FvBkqeHz/preview', 'frnd_link'],
        [39, 'https://drive.google.com/file/d/1HYz5ln3qjHwvUHJUTGJPrYyLFFQRBIaz/preview', 'frnd_link'],
        [48, 'https://drive.google.com/file/d/1-ZoI3YzIQEqZsjSDdNwE5I-9efmvQX6Y/preview', 'frnd_link'],
        [56, 'https://drive.google.com/file/d/1FQlZGXkvsFcKm-r1MOV161w_nQllhdyd/preview', 'frnd_link'],
        [65, 'https://drive.google.com/file/d/1cvsroRCuV0bA7F8SJgnQ9m7iQR7Up6GE/preview', 'frnd_link'],
        [68, 'https://drive.google.com/file/d/1A0gIdgkj73JpQ-7OjIeHE2ft5vzFZT10/preview', 'frnd_link'],
        [77, 'https://drive.google.com/file/d/1wBMtemAZ9Slsq-_aqFzEeNb7ocXCl7cn/preview', 'frnd_link'],
        [83, 'https://drive.google.com/file/d/1r-zmDW0buE_lFGLVccgHw_UL6rM01q22/preview', 'frnd_link'],
        [84, 'https://drive.google.com/file/d/1FzaEGm8tOdnAjDoEaP9ZZtrINVMPk90R/preview', 'frnd_link'],
        [104, 'https://drive.google.com/file/d/1OQPixzjHgyJmXKvj4HVO7joVH9GRA99r/preview', 'frnd_link'],
        [122, 'https://drive.google.com/file/d/1yXpjsvFIUg7w7mrOAPVvuJje_LLLZOfP/preview', 'frnd_link'],
        [130, 'https://drive.google.com/file/d/108Nv8ReXVNeti77hcjMiSuBisZPS0gHH/preview', 'frnd_link'],
        [141, 'https://drive.google.com/file/d/1Y8KfiUEB-J8D0s-ufgoifSBMtqNiNakd/preview', 'frnd_link'],
        [148, 'https://drive.google.com/file/d/1pkCsOlTKhmli4Ymvw-CG5Z5USQ3xcRTV/preview', 'frnd_link'],
        [161, 'https://drive.google.com/file/d/1sANwBr_RjTUQ1V7uEMpCChQyowIZksOg/preview', 'frnd_link'],
    ],
    "4": [
        [10, 'https://drive.google.com/file/d/1Dqsgm0VvaFrM87-4BjzrcyWeVsn8YXQA/preview', 'https://drive.google.com/file/d/1DPPqh51c1TTzuaIRscf9WOp1rMbx903L/preview'],
        [25, 'https://drive.google.com/file/d/19kpWMNdApCj0GgzAmIbKGslY8fCILa39/preview', 'https://drive.google.com/file/d/1KP3aEs_TOFWBoj5BI_2RvH2l5MddvbFY/preview'],
        [27, 'https://drive.google.com/file/d/1pp4uendPHViGih4sGIidObhLVIbKm7aA/preview', 'https://drive.google.com/file/d/1JIQW6KlthN8_bxQXhNmBH50zPkrB4JQP/preview'],
        [33, 'https://drive.google.com/file/d/13ZHaBs-l9P_jLvMUenLnBp1Cgg_s2GDN/preview', 'https://drive.google.com/file/d/1ozAPr1OrzR4txzpjeMuwrnfUl0pIVVXQ/preview'],
        [36, 'https://drive.google.com/file/d/1vkWc0ySCH30O3mI4m3ph3wOrg3nl0NIG/preview', 'https://drive.google.com/file/d/1ahH1Lv8gfldsrqSJzsWS7Mii6q13QRM0/preview'],
        [38, 'https://drive.google.com/file/d/1jYIwRPjbLaYymO1QyjSeEEi5ZUsYq_P_/preview', 'https://drive.google.com/file/d/1w6nm5fAgfOYjzH7G8AzS6bQRKc6J6lJN/preview'],
        [39, 'https://drive.google.com/file/d/1kI1XlWV_xouG9BWPAXUdx8p4UuZNYUud/preview', 'https://drive.google.com/file/d/1prxMyiFOAqJrlOi-KPk-9QVT99v8sRto/preview'],
        [48, 'https://drive.google.com/file/d/1V7gcxGrl4-UxHWWHSQdnoCs3BHvla7tO/preview', 'https://drive.google.com/file/d/1fKN1V-ans9wFhLpS8dIvIIWEOXaIi_s1/preview'],
        [56, 'https://drive.google.com/file/d/1gxCEaU4kiRf4Tk2M0K_7nq2gr4gnU69i/preview', 'https://drive.google.com/file/d/1MOHbF_0ugiuR2h7FLqOUDBxFi_eCAvuq/preview'],
        [65, 'https://drive.google.com/file/d/1omWqP1CEKOKIauRUemBpnxsPjBXwe54f/preview', 'https://drive.google.com/file/d/1KnytMvcOzCGOj6VgKoEhEz_xbkA6UgxH/preview'],
        [68, 'https://drive.google.com/file/d/1_aa9oNAAygU5J3pzWu24cvzF7_mlDNB1/preview', 'https://drive.google.com/file/d/1kKIi_TWTC2cj5o60v5TI9qTKTwfeLtWx/preview'],
        [77, 'https://drive.google.com/file/d/16ZbcOBpKPA8ME0suME_Y0asz7icxSUCO/preview', 'https://drive.google.com/file/d/1TkY2oJjGKbQQWUK81pwe6zP_PDK0Q-gV/preview'],
        [83, 'https://drive.google.com/file/d/1QDaJ5I9gEPL5aiQt2ipCQiUqqZOCttte/preview', 'https://drive.google.com/file/d/1JhPe9yRoJLu-FIk3tycBuMZ2ZNbpHu1T/preview'],
        [84, 'https://drive.google.com/file/d/1LD2CJmDdtoN9hjwNu1zlOuju8NzAUF57/preview', 'https://drive.google.com/file/d/1me5gWVPPthdIrGMVQc1FaHid1tshRcPe/preview'],
        [104, 'https://drive.google.com/file/d/1btOXSlVk00NPaxxkEVNeVfobFNl0y0T0/preview', 'https://drive.google.com/file/d/156x7IhHjHgJh1znpugCMLQ22vpiqfGTE/preview'],
        [122, 'https://drive.google.com/file/d/1fapzqVxJrjUnJ6mF0WxxaaBny4YcnDpA/preview', 'https://drive.google.com/file/d/1OPemxMkOds0UGri6tgfjse-X28Ghp-bO/preview'],
        [130, 'https://drive.google.com/file/d/1c2Aq5w7T9B5HeF6FYIC026BKt-Z7bpZ1/preview', 'https://drive.google.com/file/d/1vKtEuh6PhWWa509iSexiNkI3RcdnGk4f/preview'],
        [141, 'https://drive.google.com/file/d/1EImUALS5z2-4cyt00CTHdYFAEpX9Ad6w/preview', 'https://drive.google.com/file/d/19_mKNtwC8UcrcKSi-Eam0WJb6CRCZiB8/preview'],
        [148, 'https://drive.google.com/file/d/1hftbFClyqC5QIkNskj5wx0GIFMsAMhjZ/preview', 'https://drive.google.com/file/d/1mAtJNVgqsrckq0cAq9eL4kS8ImcC6rTd/preview'],
        [160, 'https://drive.google.com/file/d/1g9bbmTZaTM0e8WLKxZMFvRU4CnkWFs3_/preview', 'https://drive.google.com/file/d/1lyCV1mnd6a-CpQEoqS7kJv98KbTJ5ReT/preview'],
    ],
    "5": [
        [10, 'https://drive.google.com/file/d/1vkaerTV_Ya5DW2Be8WjzE-jTLdkfBkPq/view?preview', 'https://drive.google.com/file/d/1DXdLH8bXZZCC84Daf2EzPZw7I-PbhBcF/view?preview'],
        [25, 'https://drive.google.com/file/d/1e89E6GHPjJ7HK82fMwexvRk8bm4b6Wif/view?preview', 'https://drive.google.com/file/d/1GqhRhmmcFtVgfUcDKEsh5I06boOeVgVS/view?preview'],
        [27, 'https://drive.google.com/file/d/1FVI9qX8vg99llhRvM4B5GjJcUtOUtlmt/view?preview', 'https://drive.google.com/file/d/1AZgDUweafJSZaCrLRai6I_UzcH5GV7bb/view?preview'],
        [33, 'https://drive.google.com/file/d/1S1jQF_p4FBjVO3qt3DJLgBDm6ycbOi-X/view?preview', 'https://drive.google.com/file/d/1EkB7x8tdxadkW83pNUlA9lsqGhCBMOMJ/view?preview'],
        [36, 'https://drive.google.com/file/d/1ipeAHXzWbrWQsoUjP8InuP9jlRgAHiQ-/view?preview', 'https://drive.google.com/file/d/1PMDmcxwMdkgfskjePj5dzCoYlJ2Vgyjl/view?preview'],
        [38, 'https://drive.google.com/file/d/1koocEQxGrqOtRTvv_1fK122idGIWxMuk/view?preview', 'https://drive.google.com/file/d/1Zpl3EoA1Y-0scDsP4WPoihaMQ-Wy4dws/view?preview'],
        [39, 'https://drive.google.com/file/d/1jK-3soJGRZhQLVX6ZPEb225g0uwF6eLK/view?preview', 'https://drive.google.com/file/d/15Hf_qJW8ZjTiMoO1uJpWi_bHwj-21efo/view?preview'],
        [48, 'https://drive.google.com/file/d/1TcQYh705_YCEc6qfRhvsrJqLYAeOhzwp/view?preview', 'https://drive.google.com/file/d/1bD69Zv7fDItLl-6jLBT_0QolYFwlslvB/view?preview'],
        [56, 'https://drive.google.com/file/d/10sLbSLEmWWQcP1ctCbuCiAjgTjzNBYed/view?preview', 'https://drive.google.com/file/d/11w5T1CUgE2gOuljT04e1ivrg3vf8ReRn/view?preview'],
        [65, 'https://drive.google.com/file/d/1sCKTOTlC4fcg47Syxr-fjw66TPG728nK/view?preview', 'https://drive.google.com/file/d/1ibyTMpz_2t6lDGUTVM7w7R_DHSUADHyF/view?preview'],
        [68, 'https://drive.google.com/file/d/1YzlPhhenRFcaoOuAgBWljZZPJzeGVVOg/view?preview', 'https://drive.google.com/file/d/1Ps6eH-jgGfHlNeU3Xjp1ewoh1Hf1wlo8/view?preview'],
        [77, 'https://drive.google.com/file/d/1kK1kdDmifR-mKEINP6d8Dnr0drnx4CoF/view?preview', 'https://drive.google.com/file/d/1_kH5DdhAzvN6EJh-H5nvoNKIZOPwvMB2/view?preview'],
        [83, 'https://drive.google.com/file/d/1iU8pw8Cg0Arx6SDgSwI3rXAwnmqJkFQz/view?preview', 'https://drive.google.com/file/d/1dAWBZJNMyIjr_f8Yq1CSAv4tgu8-0A5v/view?preview'],
        [84, 'https://drive.google.com/file/d/1hndtoGYamYqv4YFFAKQIt6wiZ7KtoC-9/view?preview', 'https://drive.google.com/file/d/14xayRqb2SovLKE-gqcYsbhYVj8IGjrjw/view?preview'],
        [104, 'https://drive.google.com/file/d/1FM5nObpLmtTbxyTuqDzCj7u9VYnoTku1/view?preview', 'https://drive.google.com/file/d/1x9mjHOMNUwchEZDr5TT2G9PZR2i13ocB/view?preview'],
        [122, 'https://drive.google.com/file/d/1mQATBo0rpoa7BaLB7ryJn_Z3OCI5o8iJ/view?preview', 'https://drive.google.com/file/d/1lGRxezjX0RULkUcNvcil_kB-7Uw-qhDu/view?preview'],
        [130, 'https://drive.google.com/file/d/1Q8BVvel1MtzaAxUC71yTTxQJ8FcnVuxX/view?preview', 'https://drive.google.com/file/d/1LY8UD33EE8T-SvYLjiwjUvFBZcykGPbF/view?preview'],
        [141, 'https://drive.google.com/file/d/16hAe9RAbWAo3ZC6E0qPwOZyqkQL2Jw3J/view?preview', 'https://drive.google.com/file/d/1wwjNppsWLv3qKOlCzb590-XqMrfPdDb1/view?preview'],
        [148, 'https://drive.google.com/file/d/1J_Qsk6rCdbsq-GxSAsW7hExV2MilFu_U/view?preview', 'https://drive.google.com/file/d/1re43m1gu1ByegE5l90uAOzy9O3NOzN-N/view?preview'],
        [160, 'https://drive.google.com/file/d/12U6RRhYcYR_tO4QT6itVrPHkkkqbRyIR/view?preview', 'https://drive.google.com/file/d/16VgHycDFbRV4LqmjYInWt89mVkfD_gM7/view?preview'],
    ],
    "6": [
        [10, 'https://drive.google.com/file/d/1fZ9Z2ieS4mnPI-9oVbS4Piy599meqByQ/preview', 'https://drive.google.com/file/d/1QOp2Chl3EXx02z5-i-u5gCjH9jF7UpBZ/preview'],
        [25, 'https://drive.google.com/file/d/1rb-R-eev5zb5Bm5NhZEriG5m9RTXVGfK/preview', 'https://drive.google.com/file/d/1fhi7du_bPiIORTZ0P2T39bQ8QmH03tYm/preview'],
        [27, 'https://drive.google.com/file/d/1TBnwGlWit7nxssacTg2rvG8LEbRH2UUb/preview', 'https://drive.google.com/file/d/1HNdDKQ72DGRbaNxkOLTaxc9RM_nNn2DJ/preview'],
        [33, 'https://drive.google.com/file/d/1Vx21mTWSEsHN9oVoUCjvreZWfLM2vA_f/preview', 'https://drive.google.com/file/d/134yShQh3NiANHVoh7vMJOWfKqGAjI8rm/preview'],
        [36, 'https://drive.google.com/file/d/1B0nxOFhVmkTqi6fk8taEe_n0igwdCVEX/preview', 'https://drive.google.com/file/d/1FJehbCSEOuKmT8WhmKmsFcrsKWJguie_/preview'],
        [38, 'https://drive.google.com/file/d/1WAgt21I3DXU6rE3bs98xVH-HJHIgO0Uy/preview', 'https://drive.google.com/file/d/1LAAg_LmslJGpxwEZ049MpdR5CeaWBWZI/preview'],
        [39, 'https://drive.google.com/file/d/1qgHlCsjdhqgMQwPLTpQ3cNMw5b9zghgY/preview', 'https://drive.google.com/file/d/1zXHDwziVXwhxISZTxR0dhUnmveVWHWRr/preview'],
        [48, 'https://drive.google.com/file/d/1lKzjsQOcCXIJnjVK6d_nAotVruqzTeWK/preview', 'https://drive.google.com/file/d/1VeIbGYNOX_wRfUTSh4VUpEHzQmD8rGo_/preview'],
        [56, 'https://drive.google.com/file/d/1hphUwhP_Wl48dopm8sU8eJ7eACUlnx6-/preview', 'https://drive.google.com/file/d/10nM-MIe4D9y1GujbL1hnVEdOPm-5LhMs/preview'],
        [65, 'https://drive.google.com/file/d/17qGVzrlZZJbcKzzwvbp2et56OTo6RNg1/preview', 'https://drive.google.com/file/d/18jmuUxtA_az5ppjNIXYhy0BHrkheoSU4/preview'],
        [68, 'https://drive.google.com/file/d/1TZH1vT_wsDSMUAsMbtuKR33lZYPDE2t4/preview', 'https://drive.google.com/file/d/1dhiEEb6CV9aocbb7Bzsx8h4LCD53nkSu/preview'],
        [77, 'https://drive.google.com/file/d/1H3CSU-p-HP-GwOH84vuQPVCln-pYeX6Y/preview', 'https://drive.google.com/file/d/108eEOUXZtjmTjp4sVhSUna9VMUpAf_dp/preview'],
        [83, 'https://drive.google.com/file/d/1ylB3UkBFQHspdl1aN9uM54oUKXql2cWV/preview', 'https://drive.google.com/file/d/1cVC-hbnmOGJaxLLkw_TUo7ANdoll1h31/preview'],
        [84, 'https://drive.google.com/file/d/1bFx9-leAS05ZkjH4PtD0D9KL_-hfCx52/preview', 'https://drive.google.com/file/d/146leYqCPfG4z7BKePLFsOaaK5aDjxwaQ/preview'],
        [104, 'https://drive.google.com/file/d/1O4aV2MzESLNxMUR4qdr7rdjVGIPt3EkB/preview', 'https://drive.google.com/file/d/1U6ScgMSQuA8HZcR5skljkly6FG9zXvQm/preview'],
        [122, 'https://drive.google.com/file/d/1zBcp8kyVTpHEyi9t4oiP4jFW6aKY0zTq/preview', 'https://drive.google.com/file/d/1flJGuf0twvHwf7P7cXH7jfiiYZ0TcSLE/preview'],
        [130, 'https://drive.google.com/file/d/1nztLw2Qa-M7lZmIhO-PnemmgnFHn-AX7/preview', 'https://drive.google.com/file/d/15SyCNKNSZNpajvdJ3ZLdplxvz1CxgfW0/preview'],
        [141, 'https://drive.google.com/file/d/1Kk3_ykPyv2RBxGVm7qi8M6-ce3Y4tox1/preview', 'https://drive.google.com/file/d/1QBn18MOm4TDcYJNpEUlYw6PIYJ3gA_E_/preview'],
        [148, 'https://drive.google.com/file/d/1-_rbNqLwHE1elHFxLeBERadWkfFCSspb/preview', 'https://drive.google.com/file/d/1si0d00jQVUvPjZzlUMMgR2ARex2UmIac/preview'],
        [161, 'https://drive.google.com/file/d/1RDCpIuiywXrWJ5cmISav0N-cBQB5JZeD/preview', 'https://drive.google.com/file/d/1ao23IW0_Dmgiz5f-QAI01sMBDoNbN89Z/preview'],
    ]
}

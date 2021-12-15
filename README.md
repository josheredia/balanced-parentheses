# Balanced Parentheses

Doesn't it happen that your eyes hurt when you see a message with unbalanced parentheses? For us programmers, it can cause a headache to see a whatsapp like <b>"thank you for that :)))"</b>, <b>"I would love to go (but I don't think I can :("</b>, or <b>"I'm working (on what I you asked (but I won't finish today :() "</b>.
To make matters worse, with emoticons, it becomes difficult to tell if a message has balanced parentheses.

A message has balanced parentheses when it meets one of the following rules:

1. It is an empty message
2. Contains only one or more repetitions of the letters "a" through "z", space "", or colon ":"
3. It begins with an opening parenthesis "(", followed by a message with balanced parentheses, followed by a closing parenthesis ")"
4. It is a message with balanced parentheses followed by another message with balanced parentheses
5. It is a happy emoticon ":)" or a sad one ":("

This program identifies if there is at least one way to interpret the input as a balanced parenthesis message. The input is a string and the output must be "balanced" or "unbalanced"

Examples:
</br>a. <b>"hello"</b> -> balanced
</br>b. <b>"(hello)"</b> -> balanced
</br>c. <b>"(()"</b> -> unbalanced
</br>d. <b>"(:)"</b> -> balanced (eg, if we consider the message as a ":" [rule 2] in parentheses [rule 3])
</br>e. <b>"no voy (:()"</b> -> balanced (eg, if we consider the message as a ":" [rule 2] in parentheses [rule 3])
</br>f. <b>"hoy pm: fiesta :):)"</b> -> balanced
</br>g. <b>":(("</b> -> unbalanced
</br>h. <b>"a (b (c (d) c) b) a :)"</b> -> balanced (eg, if the last parenthesis is actually an emoticon)

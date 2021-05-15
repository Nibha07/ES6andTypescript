function scoping()
            {
                var value=10;
                if(value==10)
                {
                    let num=20;
                }
                return num;   // not defined error: let has block level scope
            }
            scoping();
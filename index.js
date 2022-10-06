function Game () {
    var field = document.querySelector('.field');
    var inventory = document.querySelector('.inventory')
    var killedEnemy = 0;
    var textures = {
        floor: 'tile',
        wall: 'tileW',
        enemy: 'tileE',
        hero: 'tileP',
        HP: 'tileHP',
        SW: 'tileSW',
    };

    var tileProp = {
        width: 50,
        heigth: 50,
    };


    var fieldProp = {
        rows: Math.floor(field.clientHeight / tileProp.heigth),
        cols: Math.floor(field.clientWidth / tileProp.width),
    };

    var swordClass = [
        {
            id: 0,
            skin: textures.SW,
            damage: 10,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 4;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 1,
            skin: textures.SW,
            damage: 10,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 4;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        }
    ];

    var hpClass = [
        {
            id: 0,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 1,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 2,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 3,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 4,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 5,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 6,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 7,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 8,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
        {
            id: 9,
            skin: textures.HP,
            health: 20,
            posX: 0,
            posY: 0,
            position: function (map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3 && map[posX][posY] !== 4) {
                    map[posX][posY] = 5;
                    this.posX = posX;
                    this.posY = posY
                    return;
                } else {
                    this.position(map)
                }
            },
        },
    ]

    var playerClass = {
        skin: textures.hero,
        hp: 40,
        damage: 20,
        posX: 0,
        posY: 0,
        position: function (map) {
            var posX = Math.floor(Math.random() * fieldProp.rows);
            var posY = Math.floor(Math.random() * fieldProp.cols);
            if (map[posX][posY] === 0) {
                map[posX][posY] = 2;
                this.posX = posX;
                this.posY = posY
                return;
            } else {
                this.position(map)
            }
        },
        move: function (event, map) {
            if (event.code === 'KeyD') {
                if (this.posY === map[this.posX].length - 1) {
                    return
                }
                if (map[this.posX][this.posY + 1] === 1 || map[this.posX][this.posY + 1] === 3) {
                    return
                }
                map[this.posX][this.posY] = 0;
                this.posX = this.posX;
                this.posY += 1;
                map[this.posX][this.posY] = 2;
            }
            if (event.code === 'KeyA') {
                if (this.posY === map[this.posX].length - (map[this.posX].length)) {
                    return
                }
                if (map[this.posX][this.posY - 1] === 1 || map[this.posX][this.posY - 1] === 3) {
                    return
                }
                map[this.posX][this.posY] = 0;
                this.posX = this.posX;
                this.posY -= 1;
                map[this.posX][this.posY] = 2;
            }
            if (event.code === 'KeyW') {
                if (this.posX === map.length - (map.length)) {
                    return
                }
                if (map[this.posX - 1][this.posY] === 1 || map[this.posX - 1][this.posY] === 3) {
                    return
                }
                map[this.posX][this.posY] = 0;
                this.posX -= 1;
                this.posY = this.posY;
                map[this.posX][this.posY] = 2;
            }
            if (event.code === 'KeyS') {
                if (this.posX === map.length - 1) {
                    return
                }
                if (map[this.posX + 1][this.posY] === 1 || map[this.posX + 1][this.posY] === 3) {
                    return
                }
                map[this.posX][this.posY] = 0;
                this.posX += 1;
                this.posY = this.posY;
                map[this.posX][this.posY] = 2;
            }
        },
        attack: function (event, enemyClass) {
            if (event.code === 'Space') {
                for (let i = 0; i < enemyClass.length; i++) {
                    if ((this.posX + 1 === enemyClass[i].posX && this.posY === enemyClass[i].posY) ||
                        (this.posX - 1 === enemyClass[i].posX && this.posY === enemyClass[i].posY) ||
                        (this.posY + 1 === enemyClass[i].posY && this.posX === enemyClass[i].posX) ||
                        (this.posY - 1 === enemyClass[i].posY && this.posX === enemyClass[i].posX)) {
                            enemyClass[i].hp -= this.damage;
                        }
                }
            }
        }
    }

    var enemyClass = [
        {
            id: 0,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
            move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 1,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 2,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 3,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 4,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 5,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 6,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 7,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 8,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        },
        {
            id: 9,
            skin: textures.enemy,
            hp: 50,
            posX: 0,
            posY: 0,
            position: function(map) {
                var posX = Math.floor(Math.random() * fieldProp.rows);
                var posY = Math.floor(Math.random() * fieldProp.cols);
                if (map[posX][posY] === 0 && map[posX][posY] !== 2 && map[posX][posY] !== 3) {
                    map[posX][posY] = 3;
                    this.posX = posX;
                    this.posY = posY
                return;
                } else {
                    this.position(map);
                }
            },
             move: function (map) {
                var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]
                var randomDirection = directions[Math.floor(Math.random() * directions.length)]
                if ((this.posX === 0 && randomDirection[0] === -1) ||
                    (this.posX === fieldProp.rows - 1 && randomDirection[0] === 1) ||
                    (this.posY === 0 && randomDirection[1] === -1) ||
                    (this.posY === fieldProp.cols - 1 && randomDirection[1] === 1)) {
                        return
                    }
                if (map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 1 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 2 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 3 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 4 ||
                    map[this.posX + randomDirection[0]][this.posY + randomDirection[1]] === 5) {
                    return
                }
                    map[this.posX][this.posY] = 0;
                    this.posX += randomDirection[0];
                    this.posY += randomDirection[1];
                    map[this.posX][this.posY] = 3;
            }
        } 
    ]

    function setTexture (textureClass) {
        var texture = document.createElement('div');
        texture.classList.add('tile');
        texture.classList.add(textureClass);
        field.appendChild(texture)
        if (textureClass === textures.hero) {
            var health = document.createElement('div')
            health.classList.add('health')
            health.style.width = playerClass.hp + '%'
            texture.appendChild(health)
        }
    }

    function createArray(num, width, length) {
        var array = [];
        for (var i = 0; i < width; i++) {
          array.push([]);
          for (var j = 0; j < length; j++) {
            array[i].push(num);
          }
        }
        return array;
      }

    function createMap() {
          var maxTunnels = 50,
                maxLength = 30,
                map = createArray(1, fieldProp.rows, fieldProp.cols),
                currentRow = Math.floor(Math.random() * fieldProp.rows),
                currentColumn = Math.floor(Math.random() * fieldProp.cols),
                directions = [[-1, 0], [1, 0], [0, -1], [0, 1]],
                lastDirection = [],
                randomDirection;
    
        while (maxTunnels && maxLength) {
          do {
             randomDirection = directions[Math.floor(Math.random() * directions.length)];
          } while ((randomDirection[0] === -lastDirection[0] && randomDirection[1] === -lastDirection[1]) || (randomDirection[0] === lastDirection[0] && randomDirection[1] === lastDirection[1]));
    
          var randomLength = Math.ceil(Math.random() * maxLength);
          var tunnelLength = 0;

          while (tunnelLength < randomLength) {
            if (((currentRow === 0) && (randomDirection[0] === -1)) ||
                ((currentColumn === 0) && (randomDirection[1] === -1)) ||
                ((currentRow === fieldProp.rows - 1) && (randomDirection[0] === 1)) ||
                ((currentColumn === fieldProp.cols - 1) && (randomDirection[1] === 1))) {
              break;
            } else {
              map[currentRow][currentColumn] = 0;
              currentRow += randomDirection[0];
              currentColumn += randomDirection[1];
              tunnelLength++;
            }
          }
    
          if (tunnelLength) {
            lastDirection = randomDirection;
            maxTunnels--;
          }
        }
        return map;
      };
      var map = createMap();
      
      function setActions (map) {
        playerClass.position(map);
        for (let i = 0; i < enemyClass.length; i++) {
            enemyClass[i].position(map);
        }
        for (let i = 0; i < swordClass.length; i++) {
            swordClass[i].position(map);
        }
        for (let i = 0; i < hpClass.length; i++) {
            hpClass[i].position(map);
        }
        document.addEventListener('keydown', function(event) { 
            playerClass.move(event, map);
            playerClass.attack(event, enemyClass);
        })
      }

      function check (map) {
        for (let i = 0; i < hpClass.length; i++) {
            if (hpClass[i].posX === playerClass.posX && hpClass[i].posY === playerClass.posY) {
                if (playerClass.hp <= 80) {
                    playerClass.hp += hpClass[i].health;
                    hpClass = hpClass.filter(function (item) {
                        return item.id !== hpClass[i].id
                })} else {
                    hpClass = hpClass.filter(function (item) {
                        return item.id !== hpClass[i].id
                    })
                }
            }
        }
        for (let i = 0; i < swordClass.length; i++) {
            if (swordClass[i].posX === playerClass.posX && swordClass[i].posY === playerClass.posY) {
                    playerClass.damage += swordClass[i].damage;
                    swordClass = swordClass.filter(function (item) {
                    return item.id !== swordClass[i].id
                })
            }
        }
        for (let i = 0; i < enemyClass.length; i++) {
            if (enemyClass[i].hp <= 0) {
                map[enemyClass[i].posX][enemyClass[i].posY] = 0;
                enemyClass = enemyClass.filter(function (item) {
                    return item.id !== enemyClass[i].id
                })
                killedEnemy += 1
            }
        }
        if (playerClass.hp <= 0) {
            window.location.reload();
        }
        if (killedEnemy >= 10) {
            window.location.reload();
        }
      }

      function render () {
          field.innerHTML = '';
          for (var row = 0; row < map.length; row++) {
              for (var col = 0; col < map[row].length; col++) {
                  if (map[row][col] === 0) {
                      setTexture(textures.floor);
                    }
                    if (map[row][col] === 1) {
                        setTexture(textures.wall)
                    }
                    if (map[row][col] === 2) {
                        setTexture(textures.hero);
                    }
                    if (map[row][col] === 3) {
                    setTexture(textures.enemy)
                    }
                    if (map[row][col] === 4) {
                        setTexture(textures.SW)
                    }
                    if (map[row][col] === 5) {
                        setTexture(textures.HP)
                    }
            }
        }
        inventory.innerText = 'HP: ' + playerClass.hp + '% || DAMAGE: ' + playerClass.damage + ' || Killed Enemy: ' + killedEnemy;
        return;
      }



    function init() {
        setActions(map);
        setInterval( function () {
            for (let i = 0; i < enemyClass.length; i++) {
                if ((enemyClass[i].posX + 1 === playerClass.posX && enemyClass[i].posY === playerClass.posY) ||
                    (enemyClass[i].posX - 1 === playerClass.posX && enemyClass[i].posY === playerClass.posY) ||
                    (enemyClass[i].posX === playerClass.posX && enemyClass[i].posY + 1 === playerClass.posY) ||
                    (enemyClass[i].posX === playerClass.posX && enemyClass[i].posY - 1=== playerClass.posY)) {
                            playerClass.hp -=20;
                    }
            }
        }, 1000)
        setInterval( function () {
            for (let i = 0; i < enemyClass.length; i++) {
                enemyClass[i].move(map);
            }
        }, 1000)
        setInterval(function () {
            check(map);
            render();
        }, 60)
    }
    return {
        init
    }
}
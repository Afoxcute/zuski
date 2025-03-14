/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/zuski.json`.
 */
export type Zuski = {
  "address": "7yypKnJAZ9JjaemSA3A2Ha378sebeh6ciSvMy6pzHzdq",
  "metadata": {
    "name": "zuski",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "betSol",
      "discriminator": [
        68,
        80,
        170,
        249,
        187,
        126,
        97,
        54
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "pythAccount"
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.admin",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "userState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        },
        {
          "name": "rent",
          "address": "SysvarRent111111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "betAmount",
          "type": "u64"
        },
        {
          "name": "check",
          "type": "u64"
        }
      ]
    },
    {
      "name": "coinflip",
      "discriminator": [
        190,
        228,
        143,
        242,
        188,
        76,
        12,
        150
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "pythAccount"
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.admin",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "treasuryAccount",
          "writable": true
        },
        {
          "name": "userState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  85,
                  83,
                  69,
                  82,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "user"
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "betAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositReward",
      "discriminator": [
        245,
        216,
        9,
        179,
        237,
        49,
        165,
        181
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.admin",
                "account": "globalState"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "depositAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initialize",
      "discriminator": [
        175,
        175,
        109,
        31,
        13,
        152,
        155,
        237
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "admin"
              }
            ]
          }
        },
        {
          "name": "vault",
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "setInfo",
      "discriminator": [
        213,
        180,
        130,
        151,
        202,
        169,
        231,
        38
      ],
      "accounts": [
        {
          "name": "operator",
          "writable": true,
          "signer": true,
          "relations": [
            "globalState"
          ]
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "global_state.admin",
                "account": "globalState"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "treasuryWallet",
          "type": "pubkey"
        },
        {
          "name": "treasuryFee",
          "type": "u64"
        },
        {
          "name": "locked",
          "type": "bool"
        }
      ]
    },
    {
      "name": "setOperator",
      "discriminator": [
        238,
        153,
        101,
        169,
        243,
        131,
        36,
        1
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true,
          "relations": [
            "globalState"
          ]
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "admin"
              }
            ]
          }
        }
      ],
      "args": [
        {
          "name": "newOperator",
          "type": "pubkey"
        }
      ]
    },
    {
      "name": "withdrawAll",
      "discriminator": [
        96,
        246,
        166,
        130,
        229,
        50,
        43,
        70
      ],
      "accounts": [
        {
          "name": "admin",
          "writable": true,
          "signer": true
        },
        {
          "name": "globalState",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  71,
                  76,
                  79,
                  66,
                  65,
                  76,
                  45,
                  83,
                  84,
                  65,
                  84,
                  69,
                  45,
                  83,
                  69,
                  69,
                  68
                ]
              },
              {
                "kind": "account",
                "path": "admin"
              }
            ]
          }
        },
        {
          "name": "vault",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  86,
                  65,
                  85,
                  76,
                  84,
                  95,
                  83,
                  69,
                  69,
                  68
                ]
              }
            ]
          }
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "discriminator": [
        163,
        46,
        74,
        168,
        216,
        123,
        133,
        98
      ]
    },
    {
      "name": "userState",
      "discriminator": [
        72,
        177,
        85,
        249,
        76,
        167,
        186,
        126
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "invalidPriceFeed",
      "msg": "Invalid Price Feed"
    }
  ],
  "types": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "admin",
            "type": "pubkey"
          },
          {
            "name": "operator",
            "type": "pubkey"
          },
          {
            "name": "locked",
            "type": "bool"
          },
          {
            "name": "treasuryWallet",
            "type": "pubkey"
          },
          {
            "name": "treasuryFee",
            "type": "u64"
          },
          {
            "name": "winPercentage",
            "type": {
              "array": [
                "u16",
                3
              ]
            }
          },
          {
            "name": "rewardPolicyByClass",
            "type": {
              "array": [
                "u16",
                3
              ]
            }
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "pubkey"
          },
          {
            "name": "rewardAmount",
            "type": "u64"
          },
          {
            "name": "lastSpinresult",
            "type": "u8"
          }
        ]
      }
    }
  ]
};

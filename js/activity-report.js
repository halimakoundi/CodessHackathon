function displayMessages() {
    var m1 = "<h4 class='message'>Made TV/radio announcement</h4>";
    var m2 = "<h4 class='message'>Called out for international aid</h4>";
    var m3 = "<h4 class='message'>Closed schools and administrations</h4>";
    setTimeout(function(){$("#infobox").append(m1);
        setTimeout(function(){$("#infobox .message").remove();
            setTimeout(function(){$("#infobox").append(m2);
                setTimeout(function(){$("#infobox .message").remove();
                    setTimeout(function(){$("#infobox").append(m3);
                        setTimeout(function(){$("#infobox .message").remove();}, 2000); 
                    }, 2000);
                }, 5000);
            }, 2000);
        }, 5000);
    }, 2000);
}

$(document).ready(function() {
    //displayMessages();
    var m1 = "<h4 class='message'>Made TV/radio announcement</h4>";
    var m2 = "<h4 class='message'>Called out for international aid</h4>";
    var m3 = "<h4 class='message'>Closed schools and administrations</h4>";
    var m4 = "<h4 class='message'>Raised the alert to high emergency</h4>";
    var m5 = "<h4 class='message'>Advised people to stay home</h4>";
    var m6 = "<h4 class='message'>Welcomed international help from US and UK</h4>";
    var m7 = "<h4 class='message'>Deployed army to help rescue teams</h4>";
    var m8 = "<h4 class='message'>Deployed international aid to help rescue team</h4>";
    var m9 = "<h4 class='message'>Announced rescue work is successful</h4>";
    setTimeout(function(){$("#infobox").append(m1);
        setTimeout(function(){$("#infobox .message").remove();
            setTimeout(function(){$("#infobox").append(m2);
                setTimeout(function(){$("#infobox .message").remove();
                    setTimeout(function(){$("#infobox").append(m3);
                        setTimeout(function(){$("#infobox .message").remove();
                            setTimeout(function(){$("#infobox").append(m4);
                                setTimeout(function(){$("#infobox .message").remove();
                                    setTimeout(function(){$("#infobox").append(m5);
                                        setTimeout(function(){$("#infobox .message").remove();
                                            setTimeout(function(){$("#infobox").append(m6);
                                                setTimeout(function(){$("#infobox .message").remove();
                                                setTimeout(function(){$("#infobox").append(m7);
                                                    setTimeout(function(){$("#infobox .message").remove();
                                                        setTimeout(function(){$("#infobox").append(m8);
                                                            setTimeout(function(){$("#infobox .message").remove();
                                                                setTimeout(function(){$("#infobox").append(m9);
                                                                    setTimeout(function(){$("#infobox .message").remove();
                                                                    }, 8000); 
                                                                }, 5000);
                                                            }, 8000);
                                                        }, 5000);
                                                    }, 8000);
                                                }, 5000);
                                                }, 8000); 
                                            }, 5000);
                                        }, 8000);
                                    }, 5000);
                                }, 8000);
                            }, 5000);
                        }, 8000); 
                    }, 5000);
                }, 8000);
            }, 5000);
        }, 8000);
    }, 5000);
});

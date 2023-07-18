package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCRetroRatingLetterOfCredit.eti;WCRetroRatingLetterOfCredit.eix;WCRetroRatingLetterOfCredit.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class WCRetroRatingLetterOfCreditVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.WCRetroRatingLetterOfCreditVersionList {
  public WCRetroRatingLetterOfCreditVersionListImpl(entity.WCRetroRatingLetterOfCredit base)  {
    super(base);
  }
  
  public WCRetroRatingLetterOfCreditVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.WCRetroRatingLetterOfCredit AsOf(java.util.Date date) {
    return (entity.WCRetroRatingLetterOfCredit)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.WCRetroRatingLetterOfCredit> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
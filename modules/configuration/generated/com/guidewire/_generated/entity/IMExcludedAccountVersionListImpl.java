package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMExcludedAccount.eti;IMExcludedAccount.eix;IMExcludedAccount.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMExcludedAccountVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMExcludedAccountVersionList {
  public IMExcludedAccountVersionListImpl(entity.IMExcludedAccount base)  {
    super(base);
  }
  
  public IMExcludedAccountVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMExcludedAccount AsOf(java.util.Date date) {
    return (entity.IMExcludedAccount)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMExcludedAccount> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
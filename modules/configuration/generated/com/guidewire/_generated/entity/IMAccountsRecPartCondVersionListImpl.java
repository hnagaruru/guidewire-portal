package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMAccountsRecPartCond.eti;IMAccountsRecPartCond.eix;IMAccountsRecPartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMAccountsRecPartCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMAccountsRecPartCondVersionList {
  public IMAccountsRecPartCondVersionListImpl(entity.IMAccountsRecPartCond base)  {
    super(base);
  }
  
  public IMAccountsRecPartCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMAccountsRecPartCond AsOf(java.util.Date date) {
    return (entity.IMAccountsRecPartCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMAccountsRecPartCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
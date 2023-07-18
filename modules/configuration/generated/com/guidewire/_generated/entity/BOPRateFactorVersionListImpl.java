package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPRateFactor.eti;BOPRateFactor.eix;BOPRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPRateFactorVersionList {
  public BOPRateFactorVersionListImpl(entity.BOPRateFactor base)  {
    super(base);
  }
  
  public BOPRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPRateFactor AsOf(java.util.Date date) {
    return (entity.BOPRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
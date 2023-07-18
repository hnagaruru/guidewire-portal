package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPRateFactor.eti;CPRateFactor.eix;CPRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPRateFactorVersionList {
  public CPRateFactorVersionListImpl(entity.CPRateFactor base)  {
    super(base);
  }
  
  public CPRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPRateFactor AsOf(java.util.Date date) {
    return (entity.CPRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
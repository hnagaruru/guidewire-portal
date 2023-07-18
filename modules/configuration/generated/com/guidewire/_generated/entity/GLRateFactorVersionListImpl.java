package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLRateFactor.eti;GLRateFactor.eix;GLRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLRateFactorVersionList {
  public GLRateFactorVersionListImpl(entity.GLRateFactor base)  {
    super(base);
  }
  
  public GLRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLRateFactor AsOf(java.util.Date date) {
    return (entity.GLRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BARateFactor.eti;BARateFactor.eix;BARateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BARateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BARateFactorVersionList {
  public BARateFactorVersionListImpl(entity.BARateFactor base)  {
    super(base);
  }
  
  public BARateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BARateFactor AsOf(java.util.Date date) {
    return (entity.BARateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BARateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
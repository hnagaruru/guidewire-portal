package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductRateFactor.eti;ProductRateFactor.eix;ProductRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ProductRateFactorVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ProductRateFactorVersionList {
  public ProductRateFactorVersionListImpl(entity.ProductRateFactor base)  {
    super(base);
  }
  
  public ProductRateFactorVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ProductRateFactor AsOf(java.util.Date date) {
    return (entity.ProductRateFactor)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ProductRateFactor> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
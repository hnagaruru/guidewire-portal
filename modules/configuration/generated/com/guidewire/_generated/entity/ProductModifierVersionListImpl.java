package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductModifier.eti;ProductModifier.eix;ProductModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class ProductModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.ProductModifierVersionList {
  public ProductModifierVersionListImpl(entity.ProductModifier base)  {
    super(base);
  }
  
  public ProductModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.ProductModifier AsOf(java.util.Date date) {
    return (entity.ProductModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ProductRateFactor> ProductRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.ProductModifier.PRODUCTRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToProductRateFactors(entity.ProductRateFactor bean) {
    addToArray(entity.ProductModifier.PRODUCTRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ProductModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ProductRateFactorVersionList> getProductRateFactors() {
    return (java.util.List)getArray(entity.ProductModifier.PRODUCTRATEFACTORS_PROP.get());
  }
  
  
}
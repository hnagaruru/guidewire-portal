package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "EffectiveDatedFields.eti;EffectiveDatedFields.eix;EffectiveDatedFields.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class EffectiveDatedFieldsVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.EffectiveDatedFieldsVersionList {
  public EffectiveDatedFieldsVersionListImpl(entity.EffectiveDatedFields base)  {
    super(base);
  }
  
  public EffectiveDatedFieldsVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.EffectiveDatedFields AsOf(java.util.Date date) {
    return (entity.EffectiveDatedFields)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.ProductModifier> ProductModifiersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.EffectiveDatedFields.PRODUCTMODIFIERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToProductModifiers(entity.ProductModifier bean) {
    addToArray(entity.EffectiveDatedFields.PRODUCTMODIFIERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.EffectiveDatedFields> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.ProductModifierVersionList> getProductModifiers() {
    return (java.util.List)getArray(entity.EffectiveDatedFields.PRODUCTMODIFIERS_PROP.get());
  }
  
  
}
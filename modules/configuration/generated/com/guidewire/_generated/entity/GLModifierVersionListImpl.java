package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLModifier.eti;GLModifier.eix;GLModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLModifierVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLModifierVersionList {
  public GLModifierVersionListImpl(entity.GLModifier base)  {
    super(base);
  }
  
  public GLModifierVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLModifier AsOf(java.util.Date date) {
    return (entity.GLModifier)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLRateFactor> GLRateFactorsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLModifier.GLRATEFACTORS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToGLRateFactors(entity.GLRateFactor bean) {
    addToArray(entity.GLModifier.GLRATEFACTORS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLModifier> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLRateFactorVersionList> getGLRateFactors() {
    return (java.util.List)getArray(entity.GLModifier.GLRATEFACTORS_PROP.get());
  }
  
  
}
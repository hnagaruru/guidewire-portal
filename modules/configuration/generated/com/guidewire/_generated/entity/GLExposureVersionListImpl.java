package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLExposure.eti;GLExposure.eix;GLExposure.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLExposureVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLExposureVersionList {
  public GLExposureVersionListImpl(entity.GLExposure base)  {
    super(base);
  }
  
  public GLExposureVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLExposure AsOf(java.util.Date date) {
    return (entity.GLExposure)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCovExposureCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLExposure.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GLCovExposureCost bean) {
    addToArray(entity.GLExposure.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLExposure> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLCovExposureCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GLExposure.COSTS_PROP.get());
  }
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineScheduleCov.eti;GLLineScheduleCov.eix;GLLineScheduleCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineScheduleCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineScheduleCovVersionList {
  public GLLineScheduleCovVersionListImpl(entity.GLLineScheduleCov base)  {
    super(base);
  }
  
  public GLLineScheduleCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineScheduleCov AsOf(java.util.Date date) {
    return (entity.GLLineScheduleCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLCovCost> CostsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineScheduleCov.COSTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCovItem> GLLineScheduledItemsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.GLLineScheduleCov.GLLINESCHEDULEDITEMS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCosts(entity.GLCovCost bean) {
    addToArray(entity.GLLineScheduleCov.COSTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToGLLineScheduledItems(entity.GLLineScheduleCovItem bean) {
    addToArray(entity.GLLineScheduleCov.GLLINESCHEDULEDITEMS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineScheduleCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLCovCostVersionList> getCosts() {
    return (java.util.List)getArray(entity.GLLineScheduleCov.COSTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.GLLineScheduleCovItemVersionList> getGLLineScheduledItems() {
    return (java.util.List)getArray(entity.GLLineScheduleCov.GLLINESCHEDULEDITEMS_PROP.get());
  }
  
  
}
package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMSign.eti;IMSign.eix;IMSign.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMSignVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMSignVersionList {
  public IMSignVersionListImpl(entity.IMSign base)  {
    super(base);
  }
  
  public IMSignVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMSign AsOf(java.util.Date date) {
    return (entity.IMSign)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSignCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.IMSign.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.IMSignCov bean) {
    addToArray(entity.IMSign.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMSign> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.IMSignCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.IMSign.COVERAGES_PROP.get());
  }
  
  
}
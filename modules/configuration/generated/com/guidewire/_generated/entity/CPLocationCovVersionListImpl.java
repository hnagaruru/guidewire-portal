package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPLocationCov.eti;CPLocationCov.eix;CPLocationCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class CPLocationCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.CPLocationCovVersionList {
  public CPLocationCovVersionListImpl(entity.CPLocationCov base)  {
    super(base);
  }
  
  public CPLocationCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.CPLocationCov AsOf(java.util.Date date) {
    return (entity.CPLocationCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.CPLocationCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
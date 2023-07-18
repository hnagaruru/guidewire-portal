package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLLineSchCovItemCov.eti;GLLineSchCovItemCov.eix;GLLineSchCovItemCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class GLLineSchCovItemCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.GLLineSchCovItemCovVersionList {
  public GLLineSchCovItemCovVersionListImpl(entity.GLLineSchCovItemCov base)  {
    super(base);
  }
  
  public GLLineSchCovItemCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.GLLineSchCovItemCov AsOf(java.util.Date date) {
    return (entity.GLLineSchCovItemCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.GLLineSchCovItemCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
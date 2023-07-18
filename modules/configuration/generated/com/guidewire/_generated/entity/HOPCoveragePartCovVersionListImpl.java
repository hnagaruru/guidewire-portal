package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartCov.eti;HOPCoveragePartCov.eix;HOPCoveragePartCov.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartCovVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartCovVersionList {
  public HOPCoveragePartCovVersionListImpl(entity.HOPCoveragePartCov base)  {
    super(base);
  }
  
  public HOPCoveragePartCovVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePartCov AsOf(java.util.Date date) {
    return (entity.HOPCoveragePartCov)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartCov> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
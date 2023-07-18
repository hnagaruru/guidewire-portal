package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartCond.eti;HOPCoveragePartCond.eix;HOPCoveragePartCond.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartCondVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartCondVersionList {
  public HOPCoveragePartCondVersionListImpl(entity.HOPCoveragePartCond base)  {
    super(base);
  }
  
  public HOPCoveragePartCondVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePartCond AsOf(java.util.Date date) {
    return (entity.HOPCoveragePartCond)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartCond> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
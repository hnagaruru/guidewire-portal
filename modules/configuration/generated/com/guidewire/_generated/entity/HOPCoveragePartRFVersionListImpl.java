package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePartRF.eti;HOPCoveragePartRF.eix;HOPCoveragePartRF.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartRFVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartRFVersionList {
  public HOPCoveragePartRFVersionListImpl(entity.HOPCoveragePartRF base)  {
    super(base);
  }
  
  public HOPCoveragePartRFVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePartRF AsOf(java.util.Date date) {
    return (entity.HOPCoveragePartRF)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartRF> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
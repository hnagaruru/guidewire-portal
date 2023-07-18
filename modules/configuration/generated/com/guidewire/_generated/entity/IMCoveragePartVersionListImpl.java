package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMCoveragePart.eti;IMCoveragePart.eix;IMCoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class IMCoveragePartVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.IMCoveragePartVersionList {
  public IMCoveragePartVersionListImpl(entity.IMCoveragePart base)  {
    super(base);
  }
  
  public IMCoveragePartVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.IMCoveragePart AsOf(java.util.Date date) {
    return (entity.IMCoveragePart)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.IMCoveragePart> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
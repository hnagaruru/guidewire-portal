package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BuildingImprovement.eti;BuildingImprovement.eix;BuildingImprovement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BuildingImprovementVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BuildingImprovementVersionList {
  public BuildingImprovementVersionListImpl(entity.BuildingImprovement base)  {
    super(base);
  }
  
  public BuildingImprovementVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BuildingImprovement AsOf(java.util.Date date) {
    return (entity.BuildingImprovement)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BuildingImprovement> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  
}
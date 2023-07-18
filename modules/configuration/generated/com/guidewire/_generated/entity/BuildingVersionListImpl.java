package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Building.eti;Building.eix;Building.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BuildingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BuildingVersionList {
  public BuildingVersionListImpl(entity.Building base)  {
    super(base);
  }
  
  public BuildingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.Building AsOf(java.util.Date date) {
    return (entity.Building)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BuildingImprovement> BuildingImprovementsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.Building.BUILDINGIMPROVEMENTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BuildingSide> BuildingSidesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.Building.BUILDINGSIDES_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildingImprovements(entity.BuildingImprovement bean) {
    addToArray(entity.Building.BUILDINGIMPROVEMENTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToBuildingSides(entity.BuildingSide bean) {
    addToArray(entity.Building.BUILDINGSIDES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.Building> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BuildingImprovementVersionList> getBuildingImprovements() {
    return (java.util.List)getArray(entity.Building.BUILDINGIMPROVEMENTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BuildingSideVersionList> getBuildingSides() {
    return (java.util.List)getArray(entity.Building.BUILDINGSIDES_PROP.get());
  }
  
  
}
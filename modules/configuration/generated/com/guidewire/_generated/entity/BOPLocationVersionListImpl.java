package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPLocation.eti;BOPLocation.eix;BOPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class BOPLocationVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.BOPLocationVersionList {
  public BOPLocationVersionListImpl(entity.BOPLocation base)  {
    super(base);
  }
  
  public BOPLocationVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.BOPLocation AsOf(java.util.Date date) {
    return (entity.BOPLocation)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPBuilding> BuildingsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPLocation.BUILDINGS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocationCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPLocation.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocationAnswer> LocationAnswersAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.BOPLocation.LOCATIONANSWERS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToBuildings(entity.BOPBuilding bean) {
    addToArray(entity.BOPLocation.BUILDINGS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.BOPLocationCov bean) {
    addToArray(entity.BOPLocation.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToLocationAnswers(entity.BOPLocationAnswer bean) {
    addToArray(entity.BOPLocation.LOCATIONANSWERS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.BOPLocation> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPBuildingVersionList> getBuildings() {
    return (java.util.List)getArray(entity.BOPLocation.BUILDINGS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPLocationCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.BOPLocation.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.BOPLocationAnswerVersionList> getLocationAnswers() {
    return (java.util.List)getArray(entity.BOPLocation.LOCATIONANSWERS_PROP.get());
  }
  
  
}
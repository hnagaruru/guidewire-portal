package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPCoveragePart.eti;HOPCoveragePart.eix;HOPCoveragePart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPCoveragePartVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPCoveragePartVersionList {
  public HOPCoveragePartVersionListImpl(entity.HOPCoveragePart base)  {
    super(base);
  }
  
  public HOPCoveragePartVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public entity.HOPCoveragePart AsOf(java.util.Date date) {
    return (entity.HOPCoveragePart)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePart.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePart.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePart.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePartMod> HOPCoveragePartModsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePart.HOPCOVERAGEPARTMODS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwelling> HOPDwellingsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPCoveragePart.HOPDWELLINGS_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToConditions(entity.HOPCoveragePartCond bean) {
    addToArray(entity.HOPCoveragePart.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.HOPCoveragePartCov bean) {
    addToArray(entity.HOPCoveragePart.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.HOPCoveragePartExcl bean) {
    addToArray(entity.HOPCoveragePart.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPCoveragePartMods(entity.HOPCoveragePartMod bean) {
    addToArray(entity.HOPCoveragePart.HOPCOVERAGEPARTMODS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPDwellings(entity.HOPDwelling bean) {
    addToArray(entity.HOPCoveragePart.HOPDWELLINGS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPCoveragePart> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.HOPCoveragePart.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.HOPCoveragePart.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.HOPCoveragePart.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPCoveragePartModVersionList> getHOPCoveragePartMods() {
    return (java.util.List)getArray(entity.HOPCoveragePart.HOPCOVERAGEPARTMODS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingVersionList> getHOPDwellings() {
    return (java.util.List)getArray(entity.HOPCoveragePart.HOPDWELLINGS_PROP.get());
  }
  
  
}
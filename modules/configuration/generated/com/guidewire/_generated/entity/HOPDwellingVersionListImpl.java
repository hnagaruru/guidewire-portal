package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwelling.eti;HOPDwelling.eix;HOPDwelling.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public class HOPDwellingVersionListImpl extends com.guidewire.pl.system.entity.proxy.EffDatedVersionListImpl implements entity.windowed.HOPDwellingVersionList {
  public HOPDwellingVersionListImpl(entity.HOPDwelling base)  {
    super(base);
  }
  
  public HOPDwellingVersionListImpl(gw.pl.persistence.core.Bundle bundle, gw.pl.persistence.core.effdate.EffDatedKey effDatedKey)  {
    super(bundle, effDatedKey);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellAddlInterest> AdditionalInterestsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.ADDITIONALINTERESTS_PROP.get(), date);
  }
  
  @java.lang.Override
  public entity.HOPDwelling AsOf(java.util.Date date) {
    return (entity.HOPDwelling)getVersionAsOf(date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCond> ConditionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.CONDITIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingCov> CoveragesAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.COVERAGES_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DwellingAnimal> DwellingAnimalsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.DWELLINGANIMALS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.DwellingHazard> DwellingHazardsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.DWELLINGHAZARDS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingExcl> ExclusionsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.EXCLUSIONS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwellingMod> HOPDwellingModsAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.HOPDWELLINGMODS_PROP.get(), date);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPSwimmingPool> SwimmingPoolArrayAsOf(java.util.Date date) {
    return (java.util.List)getArrayAsOf(entity.HOPDwelling.SWIMMINGPOOLARRAY_PROP.get(), date);
  }
  
  @java.lang.Override
  public void addToAdditionalInterests(entity.HOPDwellAddlInterest bean) {
    addToArray(entity.HOPDwelling.ADDITIONALINTERESTS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToConditions(entity.HOPDwellingCond bean) {
    addToArray(entity.HOPDwelling.CONDITIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToCoverages(entity.HOPDwellingCov bean) {
    addToArray(entity.HOPDwelling.COVERAGES_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDwellingAnimals(entity.DwellingAnimal bean) {
    addToArray(entity.HOPDwelling.DWELLINGANIMALS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToDwellingHazards(entity.DwellingHazard bean) {
    addToArray(entity.HOPDwelling.DWELLINGHAZARDS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToExclusions(entity.HOPDwellingExcl bean) {
    addToArray(entity.HOPDwelling.EXCLUSIONS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToHOPDwellingMods(entity.HOPDwellingMod bean) {
    addToArray(entity.HOPDwelling.HOPDWELLINGMODS_PROP.get(), bean);
  }
  
  @java.lang.Override
  public void addToSwimmingPoolArray(entity.HOPSwimmingPool bean) {
    addToArray(entity.HOPDwelling.SWIMMINGPOOLARRAY_PROP.get(), bean);
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellAddlInterestVersionList> getAdditionalInterests() {
    return (java.util.List)getArray(entity.HOPDwelling.ADDITIONALINTERESTS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.HOPDwelling> getAllVersions() {
    return (java.util.List)getAllVersionsUntyped();
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingCondVersionList> getConditions() {
    return (java.util.List)getArray(entity.HOPDwelling.CONDITIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingCovVersionList> getCoverages() {
    return (java.util.List)getArray(entity.HOPDwelling.COVERAGES_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DwellingAnimalVersionList> getDwellingAnimals() {
    return (java.util.List)getArray(entity.HOPDwelling.DWELLINGANIMALS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.DwellingHazardVersionList> getDwellingHazards() {
    return (java.util.List)getArray(entity.HOPDwelling.DWELLINGHAZARDS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingExclVersionList> getExclusions() {
    return (java.util.List)getArray(entity.HOPDwelling.EXCLUSIONS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPDwellingModVersionList> getHOPDwellingMods() {
    return (java.util.List)getArray(entity.HOPDwelling.HOPDWELLINGMODS_PROP.get());
  }
  
  @java.lang.Override
  public java.util.List<? extends entity.windowed.HOPSwimmingPoolVersionList> getSwimmingPoolArray() {
    return (java.util.List)getArray(entity.HOPDwelling.SWIMMINGPOOLARRAY_PROP.get());
  }
  
  
}
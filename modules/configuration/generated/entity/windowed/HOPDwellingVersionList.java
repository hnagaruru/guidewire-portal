package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwelling.eti;HOPDwelling.eix;HOPDwelling.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.HOPDwellAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.HOPDwelling AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DwellingAnimal> DwellingAnimalsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.DwellingHazard> DwellingHazardsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPDwellingMod> HOPDwellingModsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPSwimmingPool> SwimmingPoolArrayAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.HOPDwellAddlInterest bean);
  
  
  void addToConditions(entity.HOPDwellingCond bean);
  
  
  void addToCoverages(entity.HOPDwellingCov bean);
  
  
  void addToDwellingAnimals(entity.DwellingAnimal bean);
  
  
  void addToDwellingHazards(entity.DwellingHazard bean);
  
  
  void addToExclusions(entity.HOPDwellingExcl bean);
  
  
  void addToHOPDwellingMods(entity.HOPDwellingMod bean);
  
  
  void addToSwimmingPoolArray(entity.HOPSwimmingPool bean);
  
  
  java.util.List<? extends entity.windowed.HOPDwellAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.HOPDwelling> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.DwellingAnimalVersionList> getDwellingAnimals();
  
  
  java.util.List<? extends entity.windowed.DwellingHazardVersionList> getDwellingHazards();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.HOPDwellingModVersionList> getHOPDwellingMods();
  
  
  java.util.List<? extends entity.windowed.HOPSwimmingPoolVersionList> getSwimmingPoolArray();
  
  
  
}
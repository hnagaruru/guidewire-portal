package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAJurisdiction.eti;BAJurisdiction.eix;BAJurisdiction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAJurisdictionVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAJurisdiction AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAJurisModifier> BAJurisModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCond> ConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAJurisdictionCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateExcl> ExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAHiredAutoBasis> HiredAutoBasisArrayAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BANonOwnedBasis> NonOwnedBasisArrayAsOf(java.util.Date date);
  
  
  void addToBAJurisModifiers(entity.BAJurisModifier bean);
  
  
  void addToConditions(entity.BAStateCond bean);
  
  
  void addToCosts(entity.BAJurisdictionCost bean);
  
  
  void addToCoverages(entity.BAStateCov bean);
  
  
  void addToExclusions(entity.BAStateExcl bean);
  
  
  void addToHiredAutoBasisArray(entity.BAHiredAutoBasis bean);
  
  
  void addToNonOwnedBasisArray(entity.BANonOwnedBasis bean);
  
  
  java.util.List<? extends entity.BAJurisdiction> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BAJurisModifierVersionList> getBAJurisModifiers();
  
  
  java.util.List<? extends entity.windowed.BAStateCondVersionList> getConditions();
  
  
  java.util.List<? extends entity.windowed.BAJurisdictionCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.BAStateCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.BAStateExclVersionList> getExclusions();
  
  
  java.util.List<? extends entity.windowed.BAHiredAutoBasisVersionList> getHiredAutoBasisArray();
  
  
  java.util.List<? extends entity.windowed.BANonOwnedBasisVersionList> getNonOwnedBasisArray();
  
  
  
}
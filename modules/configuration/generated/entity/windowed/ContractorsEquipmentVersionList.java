package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipment.eti;ContractorsEquipment.eix;ContractorsEquipment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContractorsEquipmentVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.IMSchEquipAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.ContractorsEquipment AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContractorsEquipCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.IMSchEquipAddlInterest bean);
  
  
  void addToCoverages(entity.ContractorsEquipCov bean);
  
  
  java.util.List<? extends entity.windowed.IMSchEquipAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.ContractorsEquipment> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ContractorsEquipCovVersionList> getCoverages();
  
  
  
}
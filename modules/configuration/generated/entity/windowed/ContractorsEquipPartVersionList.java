package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContractorsEquipPart.eti;ContractorsEquipPart.eix;ContractorsEquipPart.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContractorsEquipPartVersionList extends entity.windowed.IMCoveragePartVersionList {
  entity.ContractorsEquipPart AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartCond> ContrEquipPartConditionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartCost> ContrEquipPartCostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartCov> ContrEquipPartCovsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContrEquipPartExcl> ContrEquipPartExclusionsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ContractorsEquipment> ContractorsEquipmentsAsOf(java.util.Date date);
  
  
  void addToContrEquipPartConditions(entity.ContrEquipPartCond bean);
  
  
  void addToContrEquipPartCosts(entity.ContrEquipPartCost bean);
  
  
  void addToContrEquipPartCovs(entity.ContrEquipPartCov bean);
  
  
  void addToContrEquipPartExclusions(entity.ContrEquipPartExcl bean);
  
  
  void addToContractorsEquipments(entity.ContractorsEquipment bean);
  
  
  java.util.List<? extends entity.ContractorsEquipPart> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ContrEquipPartCondVersionList> getContrEquipPartConditions();
  
  
  java.util.List<? extends entity.windowed.ContrEquipPartCostVersionList> getContrEquipPartCosts();
  
  
  java.util.List<? extends entity.windowed.ContrEquipPartCovVersionList> getContrEquipPartCovs();
  
  
  java.util.List<? extends entity.windowed.ContrEquipPartExclVersionList> getContrEquipPartExclusions();
  
  
  java.util.List<? extends entity.windowed.ContractorsEquipmentVersionList> getContractorsEquipments();
  
  
  
}
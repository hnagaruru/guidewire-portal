package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCovCost.eti;ContrEquipPartCovCost.eix;ContrEquipPartCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContrEquipPartCovCostVersionList extends entity.windowed.ContrEquipPartCostVersionList {
  entity.ContrEquipPartCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.IMTransaction bean);
  
  
  java.util.List<? extends entity.ContrEquipPartCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions();
  
  
  
}
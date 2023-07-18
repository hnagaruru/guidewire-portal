package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ContrEquipPartCost.eti;ContrEquipPartCost.eix;ContrEquipPartCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ContrEquipPartCostVersionList extends entity.windowed.IMTaxableCostVersionList {
  entity.ContrEquipPartCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.IMTransaction bean);
  
  
  java.util.List<? extends entity.ContrEquipPartCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMTransactionVersionList> getTransactions();
  
  
  
}
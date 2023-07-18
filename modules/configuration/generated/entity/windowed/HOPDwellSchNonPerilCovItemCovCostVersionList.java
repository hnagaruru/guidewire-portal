package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "HOPDwellSchNonPerilCovItemCovCost.eti;HOPDwellSchNonPerilCovItemCovCost.eix;HOPDwellSchNonPerilCovItemCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface HOPDwellSchNonPerilCovItemCovCostVersionList extends entity.windowed.HOPDwellSchCovItemCovCostVersionList {
  entity.HOPDwellSchNonPerilCovItemCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.HOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.HOPTransaction bean);
  
  
  java.util.List<? extends entity.HOPDwellSchNonPerilCovItemCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.HOPTransactionVersionList> getTransactions();
  
  
  
}
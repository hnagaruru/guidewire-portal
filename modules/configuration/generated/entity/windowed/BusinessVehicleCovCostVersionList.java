package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicleCovCost.eti;BusinessVehicleCovCost.eix;BusinessVehicleCovCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessVehicleCovCostVersionList extends entity.windowed.BACostVersionList {
  entity.BusinessVehicleCovCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BATransaction bean);
  
  
  java.util.List<? extends entity.BusinessVehicleCovCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions();
  
  
  
}
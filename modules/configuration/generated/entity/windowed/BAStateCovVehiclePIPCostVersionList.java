package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAStateCovVehiclePIPCost.eti;BAStateCovVehiclePIPCost.eix;BAStateCovVehiclePIPCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAStateCovVehiclePIPCostVersionList extends entity.windowed.BAStateCovVehicleCostVersionList {
  entity.BAStateCovVehiclePIPCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BATransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BATransaction bean);
  
  
  java.util.List<? extends entity.BAStateCovVehiclePIPCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BATransactionVersionList> getTransactions();
  
  
  
}
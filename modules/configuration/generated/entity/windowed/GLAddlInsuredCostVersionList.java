package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLAddlInsuredCost.eti;GLAddlInsuredCost.eix;GLAddlInsuredCost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLAddlInsuredCostVersionList extends entity.windowed.GLCostVersionList {
  entity.GLAddlInsuredCost AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.GLTransaction bean);
  
  
  java.util.List<? extends entity.GLAddlInsuredCost> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLTransactionVersionList> getTransactions();
  
  
  
}
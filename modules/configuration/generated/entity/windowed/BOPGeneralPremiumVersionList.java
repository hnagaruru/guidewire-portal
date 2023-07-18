package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPGeneralPremium.eti;BOPGeneralPremium.eix;BOPGeneralPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPGeneralPremiumVersionList extends entity.windowed.BOPTaxableVersionList {
  entity.BOPGeneralPremium AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPTransaction> TransactionsAsOf(java.util.Date date);
  
  
  void addToTransactions(entity.BOPTransaction bean);
  
  
  java.util.List<? extends entity.BOPGeneralPremium> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPTransactionVersionList> getTransactions();
  
  
  
}
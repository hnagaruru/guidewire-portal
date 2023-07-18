package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipRentalReibursement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionContractorsEquipRentalReibursementDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionContractorsEquipRentalReibursementDeductibleType> implements productmodel.OptionContractorsEquipRentalReibursementDeductibleType {
  public OptionContractorsEquipRentalReibursementDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentalReibursement getContractorsEquipRentalReibursement() {
    return (productmodel.ContractorsEquipRentalReibursement)getClause();
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipRentalReibursement getCoverage() {
    return (productmodel.ContractorsEquipRentalReibursement)getClause();
  }
  
  
}
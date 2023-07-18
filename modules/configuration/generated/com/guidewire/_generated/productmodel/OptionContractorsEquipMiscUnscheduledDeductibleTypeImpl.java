package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/IMLine/coveragepatterns/ContractorsEquipMiscUnscheduledCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionContractorsEquipMiscUnscheduledDeductibleTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionContractorsEquipMiscUnscheduledDeductibleType> implements productmodel.OptionContractorsEquipMiscUnscheduledDeductibleType {
  public OptionContractorsEquipMiscUnscheduledDeductibleTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipMiscUnscheduledCov getContractorsEquipMiscUnscheduledCov() {
    return (productmodel.ContractorsEquipMiscUnscheduledCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.ContractorsEquipMiscUnscheduledCov getCoverage() {
    return (productmodel.ContractorsEquipMiscUnscheduledCov)getClause();
  }
  
  
}
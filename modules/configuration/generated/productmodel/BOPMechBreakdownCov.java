package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPMechBreakdownCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPMechBreakdownCov extends entity.BOPBuildingCov {
  protected BOPMechBreakdownCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPMechBreakdownCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPMechBreakdownCov");
  }
  
  public BOPMechBreakdownCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPMechBreakdownCov");
  }
  
  public productmodel.DirectBOPMechBreakdownDeductType getBOPMechBreakdownDeductTerm() {
    return (productmodel.DirectBOPMechBreakdownDeductType)getCovTerm("BOPMechBreakdownDeduct");
  }
  
  public productmodel.OptionBOPMechBreakdownIncomeDeductType getBOPMechBreakdownIncomeDeductTerm() {
    return (productmodel.OptionBOPMechBreakdownIncomeDeductType)getCovTerm("BOPMechBreakdownIncomeDeduct");
  }
  
  public productmodel.DirectBOPMechBreakdownLimType getBOPMechBreakdownLimTerm() {
    return (productmodel.DirectBOPMechBreakdownLimType)getCovTerm("BOPMechBreakdownLim");
  }
  
  public boolean getHasBOPMechBreakdownDeductTerm() {
    return hasCovTerm("BOPMechBreakdownDeduct");
  }
  
  public boolean getHasBOPMechBreakdownIncomeDeductTerm() {
    return hasCovTerm("BOPMechBreakdownIncomeDeduct");
  }
  
  public boolean getHasBOPMechBreakdownLimTerm() {
    return hasCovTerm("BOPMechBreakdownLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPMechBreakdownCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPMechBreakdownCov>() {
      public productmodel.BOPMechBreakdownCov newEmptyInstance() {
        return new productmodel.BOPMechBreakdownCov();
      }
      
      
    });
  }
}
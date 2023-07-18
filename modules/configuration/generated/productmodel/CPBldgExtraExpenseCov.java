package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgExtraExpenseCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CPBldgExtraExpenseCov extends entity.CPBuildingCov {
  protected CPBldgExtraExpenseCov()  {
    super((java.lang.Void)null);
  }
  
  public CPBldgExtraExpenseCov(entity.PolicyPeriod branch)  {
    super(branch, "CPBldgExtraExpenseCov");
  }
  
  public CPBldgExtraExpenseCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CPBldgExtraExpenseCov");
  }
  
  public productmodel.DirectCPBldgExtraExpenseCovLimitType getCPBldgExtraExpenseCovLimitTerm() {
    return (productmodel.DirectCPBldgExtraExpenseCovLimitType)getCovTerm("CPBldgExtraExpenseCovLimit");
  }
  
  public productmodel.PackageCPBldgExtraExpenseCovMonthLimitType getCPBldgExtraExpenseCovMonthLimitTerm() {
    return (productmodel.PackageCPBldgExtraExpenseCovMonthLimitType)getCovTerm("CPBldgExtraExpenseCovMonthLimit");
  }
  
  public boolean getHasCPBldgExtraExpenseCovLimitTerm() {
    return hasCovTerm("CPBldgExtraExpenseCovLimit");
  }
  
  public boolean getHasCPBldgExtraExpenseCovMonthLimitTerm() {
    return hasCovTerm("CPBldgExtraExpenseCovMonthLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.CPBldgExtraExpenseCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CPBldgExtraExpenseCov>() {
      public productmodel.CPBldgExtraExpenseCov newEmptyInstance() {
        return new productmodel.CPBldgExtraExpenseCov();
      }
      
      
    });
  }
}
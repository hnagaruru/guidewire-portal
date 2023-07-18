package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPEqBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPEqBldgCov extends entity.BOPBuildingCov {
  protected BOPEqBldgCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPEqBldgCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPEqBldgCov");
  }
  
  public BOPEqBldgCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPEqBldgCov");
  }
  
  public productmodel.OptionEQDeductibleType getEQDeductibleTerm() {
    return (productmodel.OptionEQDeductibleType)getCovTerm("EQDeductible");
  }
  
  public boolean getHasEQDeductibleTerm() {
    return hasCovTerm("EQDeductible");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPEqBldgCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPEqBldgCov>() {
      public productmodel.BOPEqBldgCov newEmptyInstance() {
        return new productmodel.BOPEqBldgCov();
      }
      
      
    });
  }
}
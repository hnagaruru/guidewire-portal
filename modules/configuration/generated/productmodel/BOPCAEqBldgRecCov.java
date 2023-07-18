package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCAEqBldgRecCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCAEqBldgRecCov extends entity.BOPBuildingCov {
  protected BOPCAEqBldgRecCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPCAEqBldgRecCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPCAEqBldgRecCov");
  }
  
  public BOPCAEqBldgRecCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCAEqBldgRecCov");
  }
  
  public productmodel.DirectBOPCAEqBldgRecLimitType getBOPCAEqBldgRecLimitTerm() {
    return (productmodel.DirectBOPCAEqBldgRecLimitType)getCovTerm("BOPCAEqBldgRecLimit");
  }
  
  public boolean getHasBOPCAEqBldgRecLimitTerm() {
    return hasCovTerm("BOPCAEqBldgRecLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCAEqBldgRecCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCAEqBldgRecCov>() {
      public productmodel.BOPCAEqBldgRecCov newEmptyInstance() {
        return new productmodel.BOPCAEqBldgRecCov();
      }
      
      
    });
  }
}
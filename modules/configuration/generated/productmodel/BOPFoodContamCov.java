package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPFoodContamCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPFoodContamCov extends entity.BusinessOwnersCov {
  protected BOPFoodContamCov()  {
    super((java.lang.Void)null);
  }
  
  public BOPFoodContamCov(entity.PolicyPeriod branch)  {
    super(branch, "BOPFoodContamCov");
  }
  
  public BOPFoodContamCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPFoodContamCov");
  }
  
  public productmodel.DirectBOPFoodContamAdvLimType getBOPFoodContamAdvLimTerm() {
    return (productmodel.DirectBOPFoodContamAdvLimType)getCovTerm("BOPFoodContamAdvLim");
  }
  
  public productmodel.DirectBOPFoodContamLimType getBOPFoodContamLimTerm() {
    return (productmodel.DirectBOPFoodContamLimType)getCovTerm("BOPFoodContamLim");
  }
  
  public boolean getHasBOPFoodContamAdvLimTerm() {
    return hasCovTerm("BOPFoodContamAdvLim");
  }
  
  public boolean getHasBOPFoodContamLimTerm() {
    return hasCovTerm("BOPFoodContamLim");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPFoodContamCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPFoodContamCov>() {
      public productmodel.BOPFoodContamCov newEmptyInstance() {
        return new productmodel.BOPFoodContamCov();
      }
      
      
    });
  }
}
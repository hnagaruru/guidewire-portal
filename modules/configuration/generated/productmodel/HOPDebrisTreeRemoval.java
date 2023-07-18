package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDebrisTreeRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPDebrisTreeRemoval extends entity.HOPDwellingCov {
  protected HOPDebrisTreeRemoval()  {
    super((java.lang.Void)null);
  }
  
  public HOPDebrisTreeRemoval(entity.PolicyPeriod branch)  {
    super(branch, "zo4iu93mmrrl90ise6f67gqif98");
  }
  
  public HOPDebrisTreeRemoval(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zo4iu93mmrrl90ise6f67gqif98");
  }
  
  public productmodel.OptionHOPDebrisTreeRemovalLimitType getHOPDebrisTreeRemovalLimitTerm() {
    return (productmodel.OptionHOPDebrisTreeRemovalLimitType)getCovTerm("zidhqs5kvipod72ar5le6k5higa");
  }
  
  public boolean getHasHOPDebrisTreeRemovalLimitTerm() {
    return hasCovTerm("zidhqs5kvipod72ar5le6k5higa");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPDebrisTreeRemovalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPDebrisTreeRemoval>() {
      public productmodel.HOPDebrisTreeRemoval newEmptyInstance() {
        return new productmodel.HOPDebrisTreeRemoval();
      }
      
      
    });
  }
}
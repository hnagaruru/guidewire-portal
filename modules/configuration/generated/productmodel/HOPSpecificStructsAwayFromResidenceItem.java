package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPSpecificStructsAwayFromResidenceItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPSpecificStructsAwayFromResidenceItem extends entity.HOPDwellSchCovItemCov {
  protected HOPSpecificStructsAwayFromResidenceItem()  {
    super((java.lang.Void)null);
  }
  
  public HOPSpecificStructsAwayFromResidenceItem(entity.PolicyPeriod branch)  {
    super(branch, "zh5j85vgpge8n6saji15tsonl8b");
  }
  
  public HOPSpecificStructsAwayFromResidenceItem(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zh5j85vgpge8n6saji15tsonl8b");
  }
  
  public productmodel.DirectHOPSpecificStructsAwayFromResidenceItemLimitType getHOPSpecificStructsAwayFromResidenceItemLimitTerm() {
    return (productmodel.DirectHOPSpecificStructsAwayFromResidenceItemLimitType)getCovTerm("zaagmovelvmh03d5ur750svk1fb");
  }
  
  public boolean getHasHOPSpecificStructsAwayFromResidenceItemLimitTerm() {
    return hasCovTerm("zaagmovelvmh03d5ur750svk1fb");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPSpecificStructsAwayFromResidenceItemInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPSpecificStructsAwayFromResidenceItem>() {
      public productmodel.HOPSpecificStructsAwayFromResidenceItem newEmptyInstance() {
        return new productmodel.HOPSpecificStructsAwayFromResidenceItem();
      }
      
      
    });
  }
}